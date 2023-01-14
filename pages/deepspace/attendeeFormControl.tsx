import { Field, useField, useFormikContext } from "formik";
import { Seperator } from "../../components/core/Seperator";

export const AtendeeFormControl: React.FC<{ name: string }> = ({ name }) => {
  const [field] = useField(name);
  const context = useFormikContext();
  return (
    <div>
      <p>
        <strong>Enter the attendee names related to this RSVP below</strong>
        <Seperator />
        <div className="pb-4">
          {field.value.map((value: string, i: number) => {
            if (value === undefined) return;
            return (
              <>
                <p className="py-2">Atendee</p>
                <Field
                  name={`${name}[${i}]`}
                  key={i}
                  style={{ outline: "1px solid", height: 35, padding: '5px 10px' }}
                />
                <button
                  onClick={() =>
                    context.setFieldValue(`${name}[${i}]`, undefined)
                  }
                  style={{ border: "1px solid black", padding: "5px 10px", marginLeft: 10 }}

                >
                  Remove
                </button>
              </>
            );
          })}
        </div>
        <button
          style={{ border: "1px solid black", padding: "5px 10px", marginBottom: 20 }}
          onClick={(e) =>
            context.setFieldValue(`${name}[${field.value.length || 0}]`, "")
          }
          type="button"
        >
          Add attendee
        </button>
      </p>
    </div>
  );
};
