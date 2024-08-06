export const SignUpFormData = {
    id: "signup-form",
    fields: [
      { id: "1", name: "Username", type: "text" },
      { id: "2", name: "Email", type: "email" },
      { id: "3", name: "Password", type: "password" },
    ],
    submit: "Continue",
    method: "post",
    action: "/api/signup"
  }