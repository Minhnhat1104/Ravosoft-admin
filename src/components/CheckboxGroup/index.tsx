import React from 'react';

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { LabelValue } from '~/types';

interface CheckboxGroupProps {
  //   value: LabelValue[];
  //   onChange: (nVal: LabelValue[]) => void;
  options: LabelValue[];
  disabled?: boolean;
}

const CheckboxGroup = ({ options, disabled }: CheckboxGroupProps) => {
  return (
    <FormGroup>
      {options?.map((_option, i) => {
        // const checked = !!value?.find((_item) => _item?.value == _option?.value);

        return (
          <FormControlLabel
            key={_option?.value}
            control={
              <Checkbox
                size="small"
                defaultChecked
                // checked={checked}
                // onChange={() => {
                //   if (checked) {
                //     onChange([...value, _option]);
                //   } else {
                //     onChange(value?.filter((_item) => _item?.value !== _option?.value));
                //   }
                // }}
              />
            }
            label={_option?.label}
            disabled={disabled}
          />
        );
      })}
    </FormGroup>
  );
};

export default CheckboxGroup;
