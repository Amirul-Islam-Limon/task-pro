import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import SignUp from '../pages/SignUp/SignUp'
import AddTaskModalForm from './AddTaskModalForm'

const AddTaskModal=({isOpen, setIsOpen})=>{
    // const [isOpen, setIsOpen] = useState(true);
  
    
    //   function openModal() {
    //     setIsOpen(true)
    //   }
    
    const closeModal=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className='md:w-2/6'>
                                <AddTaskModalForm isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}></AddTaskModalForm>
                            </div>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>
            </>
        </div>
      )
}

export default AddTaskModal;