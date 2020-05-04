import React, { useState, useEffect } from "react";
import { CheckBox, Box, Markdown, Button } from "grommet";
import { FormTrash } from "grommet-icons";

export const TodoItem = ({ item, onRemove }) => {
  const [checked, setChecked] = useState(item.check);
  return (
    <Box
      width="100%"
      heigth="medium"
      align="center"
      justify="start"
      direction="row"
      gap="small"
      pad="small"
    >
      <CheckBox
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);
          item.check = !checked;
          console.log(item, checked);
        }}
      />
      <Markdown>{checked ? "~~" + item.item + "~~" : item.item}</Markdown>
      <Button
        icon={<FormTrash />}
        onClick={() => {
          onRemove(item.id);
        }}
      />
    </Box>
  );
};

export default React.memo(TodoItem);
