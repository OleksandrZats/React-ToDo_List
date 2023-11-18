import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import filtersEnum from "../../constants/filtersEnum";

const Filter = ({ setFilter = () => {} }) => {
    const onRadioChange = (value) => setFilter(value);
    return (
        <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={filtersEnum.all}
            name="radio-buttons-group"
            onChange={(e) => onRadioChange(e.target.value)}
        >
            <FormControlLabel
                value={filtersEnum.all}
                control={<Radio sx={{ color: "#a1c8ff", '&.Mui-checked': { color: "#a1c8ff" } }} />}
                label="All"
            />
            <FormControlLabel
                value={filtersEnum.done}
                control={<Radio sx={{ color: "#a1c8ff", '&.Mui-checked': { color: "#a1c8ff" } }} />}
                label="Done"
            />
            <FormControlLabel
                value={filtersEnum.notdone}
                control={<Radio sx={{ color: "#a1c8ff", '&.Mui-checked': { color: "#a1c8ff" } }} />}
                label="Not done"
            />
        </RadioGroup>
    );
};

export default Filter;