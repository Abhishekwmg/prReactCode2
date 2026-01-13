export const formData = [
    {
        id: "personal",
        title: "Personal Information",
        description: "Tell us about yourself",
        fields: [
            {
                name: "firstName",
                label: "First Name",
                type: "text",
                placeholder: "John",
                required: true,
            },
            {
                name: "lastName",
                label: "Last Name",
                type: "text",
                placeholder: "Doe",
                required: true,
            },
            {
                name: "email",
                label: "Email Address",
                type: "email",
                placeholder: "john.doe@example.com",
                required: true,
            },
        ],
    },

    {
        id: "account",
        title: "Account Details",
        description: "Set up your account",
        fields: [
            {
                name: "username",
                label: "Username",
                type: "text",
                placeholder: "johndoe",
                required: true,
            },
            {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "********",
                required: true,
            },
            {
                name: "confirmPassword",
                label: "Confirm Password",
                type: "password",
                placeholder: "********",
                required: true,
            },
        ],
    },

    {
        id: "preferences",
        title: "Preferences",
        description: "Customize your experience",
        fields: [
            {
                name: "newsletter",
                label: "Subscribe to Newsletter",
                type: "checkbox",
            },
            {
                name: "theme",
                label: "Preferred Theme",
                type: "select",
                options: [
                    { label: "Light", value: "light" },
                    { label: "Dark", value: "dark" },
                    { label: "System Default", value: "system" },
                ],
                required: true,
            },
        ],
    },
];