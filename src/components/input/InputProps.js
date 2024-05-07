import {QDate, QInput} from "quasar";

export const InputBaseProps = {
  label: {
    type: String,
    required: false,
  },
  inputProps: {
    type: QInput,
    required: false,
  }
}

export const InputDatePickerProps = {
  ...InputBaseProps,
  datePickerProps: {
    type: QDate,
    required: false,
  }
}
