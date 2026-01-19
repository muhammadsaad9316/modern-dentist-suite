"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Users, CreditCard, User, Phone, Mail, CheckCircle2, Calendar, Clock, FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { validateBookingForm, BookingFormData, ValidationErrors } from "@/lib/validation";
import { useTranslations } from "next-intl";

interface BookingFormProps {
    onSuccess: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
    const t = useTranslations('BookPage.form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});

    // Form state
    const [formData, setFormData] = useState<BookingFormData>({
        name: "",
        phone: "",
        email: "",
        patientType: "new",
        insurance: "Public Insurance (Gesetzlich)",
        serviceType: "General Checkup",
        date: "",
        time: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handlePatientTypeChange = (type: "new" | "returning") => {
        setFormData(prev => ({ ...prev, patientType: type }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate
        const newErrors = validateBookingForm(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        onSuccess();
    };

    return (
        <div className="p-8 md:p-10 md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Type & Insurance Row */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>
                            <Users className="h-4 w-4 text-primary" /> {t('patientType.label')}
                        </Label>
                        <div className="flex bg-slate-100 p-1 rounded-lg">
                            <button
                                type="button"
                                onClick={() => handlePatientTypeChange("new")}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                    formData.patientType === "new" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
                                )}
                            >
                                {t('patientType.new')}
                            </button>
                            <button
                                type="button"
                                onClick={() => handlePatientTypeChange("returning")}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                    formData.patientType === "returning" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
                                )}
                            >
                                {t('patientType.returning')}
                            </button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="insurance">
                            <CreditCard className="h-4 w-4 text-primary" /> {t('insurance.label')}
                        </Label>
                        <div className="relative">
                            <select
                                id="insurance"
                                name="insurance"
                                value={formData.insurance}
                                onChange={handleChange}
                                className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white font-sans text-slate-700"
                            >
                                <option value="Public Insurance (Gesetzlich)">{t('insurance.options.public')}</option>
                                <option value="Private Insurance">{t('insurance.options.private')}</option>
                                <option value="Self-Payer">{t('insurance.options.self')}</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            <User className="h-4 w-4 text-primary" /> {t('personal.name')}
                        </Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name && t(`errors.${errors.name}`)}
                            placeholder={t('personal.placeholders.name')}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">
                            <Phone className="h-4 w-4 text-primary" /> {t('personal.phone')}
                        </Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone && t(`errors.${errors.phone}`)}
                            placeholder={t('personal.placeholders.phone')}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">
                        <Mail className="h-4 w-4 text-primary" /> {t('personal.email')}
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email && t(`errors.${errors.email}`)}
                        placeholder={t('personal.placeholders.email')}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="serviceType">
                            <CheckCircle2 className="h-4 w-4 text-primary" /> {t('service.label')}
                        </Label>
                        <div className="relative">
                            <select
                                id="serviceType"
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white font-sans text-sm text-slate-700"
                            >
                                <option value="General Checkup">{t('service.options.checkup')}</option>
                                <option value="Professional Cleaning">{t('service.options.cleaning')}</option>
                                <option value="Pain / Emergency">{t('service.options.pain')}</option>
                                <option value="Implant Consultation">{t('service.options.implant')}</option>
                                <option value="Aesthetic/Whitening">{t('service.options.aesthetic')}</option>
                                <option value="Other">{t('service.options.other')}</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="date">
                            <Calendar className="h-4 w-4 text-primary" /> {t('datetime.date')}
                        </Label>
                        <Input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            error={errors.date && t(`errors.${errors.date}`)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="time">
                            <Clock className="h-4 w-4 text-primary" /> {t('datetime.time')}
                        </Label>
                        <Input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            min="08:00"
                            max="18:00"
                            step="1800"
                            error={errors.time && t(`errors.${errors.time}`)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">
                        <FileText className="h-4 w-4 text-primary" /> {t('notes')}
                    </Label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 resize-none font-sans text-sm"
                        placeholder={t('personal.placeholders.message')}
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2"
                    isLoading={isSubmitting}
                >
                    {isSubmitting ? t('submitting') : t('submit')}
                </Button>

                <p className="text-xs text-center text-slate-400 mt-4">
                    {t('disclaimer')}
                </p>
            </form>
        </div>
    );
}
