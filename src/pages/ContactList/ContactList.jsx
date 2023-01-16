import {
  Item,
  List,
  ButtonReg,
  UserIcon,
  PhoneIcon,
  InputForm,
  ModalRedact,
  UserIconList,
  PhoneiconList,
  DivName,
  Spiner,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, redactContatc } from 'Redux/Contacts/operations';
import { useEffect, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'Redux/Contacts/operations';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const Contactlist = () => {
  const [subName, setSubName] = useState('');
  const [subNumber, setSubNumber] = useState('');
  const [subId, setSubId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(redactContatc({ id: subId, name: subName, number: subNumber }));
  };
  const showModal = (name, number, id) => {
    setSubNumber(number);
    setSubName(name);
    setSubId(id);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const { isLoading } = useSelector(state => state.contacts);
  const contacts = useSelector(state => state.contacts.items);
  const filterData = useSelector(state => state.filter).toLowerCase();
  const visibleContacts = contacts.filter(subscriber =>
    subscriber.name.toLowerCase().includes(filterData)
  );

  return (
    <List>
      <div>
        {' '}
        <Filter />
        <ContactForm />
        {isLoading && <Spiner />}
      </div>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <DivName>
            <UserIconList />
            {name}:
          </DivName>
          <PhoneiconList /> {number}
          <ButtonReg
            onClick={() => showModal(name, number, id)}
            title="Edit contatc"
          >
            <EditOutlined />
            Redact
          </ButtonReg>
          <Button
            title="delete contatc"
            type="primary"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteOutlined /> Delete
          </Button>
        </Item>
      ))}
      <ModalRedact
        title="Edit a contact"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputForm
          prefix={<UserIcon />}
          value={subName}
          onChange={e => {
            setSubName(e.target.value);
          }}
        />
        <InputForm
          prefix={<PhoneIcon />}
          value={subNumber}
          onChange={e => {
            setSubNumber(e.target.value);
          }}
        />
      </ModalRedact>
    </List>
  );
};
