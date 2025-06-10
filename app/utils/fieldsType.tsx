import { Form } from "react-bootstrap";
import { useField, type FieldHookConfig } from "formik";

interface MyFieldInputProps extends FieldHookConfig<string> {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
}

export const MyTextInput = ({
  label,
  as = "input",
  rows,
  ...props
}: MyFieldInputProps) => {
  const [field, meta] = useField(props);
  const isInvalid = Boolean(meta.touched && meta.error);
  return (
    <Form.Group controlId={field.name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      {as === "textarea" ? (
        <Form.Control
          {...field}
          {...props}
          as="textarea"
          rows={rows}
          isInvalid={isInvalid}
        />
      ) : (
        <Form.Control
          {...field}
          {...props}
          isInvalid={isInvalid}
        />
      )}
      <Form.Control.Feedback type="invalid">
        {meta.error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};