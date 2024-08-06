export type FormField = {
	id: string,
	name: string,
    type: string,
    value: (string | null)
};

export type Data = {
	id: string,
	fields: FormField[],
    submit: string,
    action: string,
    method: string
};