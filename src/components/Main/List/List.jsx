import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./Styles";
import { ExpenseTrackerContext } from "../../../context/context";
const List = () => {
  const classes = useStyles();
  const { deleteTransactions, transactions } = useContext(
    ExpenseTrackerContext
  );

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((t) => (
        <Slide direction="down" in mountOnEnter unMountOnExit key={t.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  t.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={t.category}
              secondary={`${t.amount}-${t.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransactions(t.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};
export default List;
