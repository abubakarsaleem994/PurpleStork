import React, {useRef, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import CustomerCard from '../../../shared/components/customerCard';
import CustomAlert from '../../../shared/components/customAlert';
import {styles} from './styles';
const CustomersCards = ({completed}: {completed: boolean}) => {
  const [pendingCards, setPendingCard] = useState([
    {
      id: 9,
      name: 'David1 Miller1',
      phone: '+923056076345',
      data: 'Aug 15 2023',
    },
    {
      id: 10,
      name: 'Umar',
      phone: '+923059857453',
      data: 'Aug 16 2023',
    },
    {
      id: 11,
      name: 'Ali',
      phone: '+9230659675443',
      data: 'Aug 17 2023',
    },
    {
      id: 12,
      name: 'Abubakar',
      phone: '+92394454633',
      data: 'Aug 18 2023',
    },
    {
      id: 13,
      name: 'Usman1',
      phone: '+92394454633',
      data: 'Aug 19 2023',
    },
    {
      id: 14,
      name: 'Usman',
      phone: '+92394454633',
      data: 'Aug 20 2023',
    },
    {
      id: 15,
      name: 'Usman',
      phone: '+92394454633',
      data: 'Aug 21 2023',
    },
    {
      id: 16,
      name: 'Usman',
      phone: '+92394454633',
      data: 'Aug 22 2023',
    },
  ]);
  const [completedCards, setCompletedCards] = useState([
    {
      id: 1,
      name: 'David Miller',
      phone: '+923056076345',
      data: 'Aug 15 2023',
    },
    {
      id: 2,
      name: 'Umar',
      phone: '+923059857453',
      data: 'Aug 16 2023',
    },
    {
      id: 3,
      name: 'Ali',
      phone: '+9230659675443',
      data: 'Aug 17 2023',
    },
    {
      id: 4,
      name: 'Abubakar',
      phone: '+92394454633',
      data: 'Aug 18 2023',
    },
    {
      id: 5,
      name: 'Usman1',
      phone: '+92394454633',
      data: 'Aug 19 2023',
    },
    {
      id: 6,
      name: 'Usman',
      phone: '+92394454633',
      data: 'Aug 20 2023',
    },
    {
      id: 7,
      name: 'Usman',
      phone: '+92394454633',
      data: 'Aug 21 2023',
    },
    {
      id: 8,
      name: 'Usman',
      phone: '+92394454633',
      data: 'Aug 22 2023',
    },
  ]);
  const [show, setShow] = useState(false);
  let selectedItem: any = useRef(null);
  const handler = () => {
    if (completed) {
      let newComplete = completedCards.filter((elem: any) => {
        return selectedItem?.current?.id != elem.id;
      });
      let newPending = [selectedItem?.current, ...pendingCards];
      setCompletedCards(newComplete);
      setPendingCard(newPending);
    } else {
      let newPending = pendingCards.filter((elem: any) => {
        return selectedItem?.current?.id != elem.id;
      });
      let newComplete = [selectedItem?.current, ...completedCards];
      setCompletedCards(newComplete);
      setPendingCard(newPending);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => String(_.id)}
        data={completed ? completedCards : pendingCards}
        renderItem={({item}) => (
          <CustomerCard
            name={item.name}
            id={item.id}
            phone={item.phone}
            date={item.data}
            completed={completed}
            onpress={() => {
              selectedItem.current = item;
              setShow(true);
            }}
          />
        )}
      />
      {show ? (
        <CustomAlert
          modalVisible={show}
          setModalVisible={setShow}
          onYesPress={handler}
        />
      ) : null}
    </View>
  );
};

export default CustomersCards;
