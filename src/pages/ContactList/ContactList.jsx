import { Button, Item, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/operations';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/Contacts/operations';
import { Filter } from 'components/Filter/Filter';

export const Contactlist = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filterData = useSelector(state => state.filter).toLowerCase();
  const visibleContacts = contacts.filter(subscriber =>
    subscriber.name.toLowerCase().includes(filterData)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <List>
      <Filter />
      {visibleContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          {name}: {phone}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
      <Outlet />
    </List>
  );
};
