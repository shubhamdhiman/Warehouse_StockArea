import toast from 'react-hot-toast';
export const storeUpdated = (name) => {
    toast.success(`${name} Updated`, { duration: 2000 });
};