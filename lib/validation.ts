export interface BookingFormData {
    name: string;
    phone: string;
    email: string;
    patientType: "new" | "returning";
    insurance: string;
    serviceType: string;
    date?: string;
    time?: string;
    message?: string;
}

export interface ValidationErrors {
    [key: string]: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // Basic international phone check

export function isValidEmail(email: string): boolean {
    return EMAIL_REGEX.test(email);
}

export function isValidPhone(phone: string): boolean {
    // Remove spaces and dashes for length check if needed, but regex covers basic format
    return PHONE_REGEX.test(phone) || phone.length > 8; // Fallback simple length check
}

export function validateBookingForm(data: BookingFormData): ValidationErrors {
    const errors: ValidationErrors = {};

    if (!data.name.trim()) {
        errors.name = "required";
    }

    if (!data.phone.trim()) {
        errors.phone = "required";
    } else if (!isValidPhone(data.phone)) {
        errors.phone = "invalid_phone";
    }

    if (!data.email.trim()) {
        errors.email = "required";
    } else if (!isValidEmail(data.email)) {
        errors.email = "invalid_email";
    }

    if (!data.date) {
        errors.date = "required";
    }

    if (!data.time) {
        errors.time = "required";
    }

    return errors;
}
