import create from 'zustand';

import { CustomerDataType } from '../../lib/type';

type CustomerStore = {
  customers: CustomerDataType[];
  setCustomer(data: CustomerDataType[]): void;
};

const useCustomer = create<CustomerStore>((set) => ({
  customers: [],
  setCustomer(data: CustomerDataType[]) {
    set((state) => ({ ...state, customers: data }));
  },
}));

export default useCustomer;
