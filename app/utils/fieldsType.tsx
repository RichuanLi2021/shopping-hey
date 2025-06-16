import { Form } from "react-bootstrap";
import { useField, type FieldHookConfig } from "formik";

interface MyFieldInputProps extends FieldHookConfig<string> {
  label: string;
  name: string;
  type?: "text" | "email" | "number";
  placeholder?: string;
  as?: "input" | "textarea";
  rows?: number;
}

export const MyTextInput = (props: MyFieldInputProps) => {
  const { name, type = "text", label, placeholder, as = "input", rows } = props;
  const [field, meta] = useField<string>({ name, type });
  const isInvalid = Boolean(meta.touched && meta.error);
  return (
    <Form.Group controlId={field.name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      {as === "textarea" ? (
        <Form.Control
          {...field}
          as="textarea"
          placeholder={placeholder}
          isInvalid={isInvalid}
        />
      ) : (
        <Form.Control
          {...field}
          type={type}
          placeholder={placeholder}
          isInvalid={isInvalid}
        />
      )}
      <Form.Control.Feedback type="invalid">
        {meta.error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};