// import { Listbox, Transition } from '@headlessui/react'
// import clsx from 'clsx'
// import dropArrowDown from 'helpers/images/ArrowDownGradient.svg'
// import { useFirstRender } from 'hooks/useFirstRender'
// import { ComponentPropsWithoutRef, Fragment, useEffect, useState } from 'react'
// import {ListItem} from '@/shared/ui/Profile/types'
//
// interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
//   icon?: string
//   list: ListItem[]
//   className?: string
//   width: string
//   label?: string
//   defaultChosen?: boolean
//   onChange: (option: ListItem) => void
//   disabled?: boolean
//   chosenItem?: ListItem
// }
//
// export const ProfileListBox = ({
//   list,
//   icon,
//   className,
//   width,
//   label,
//   onChange,
//   defaultChosen = false,
//   disabled = false,
//   chosenItem,
// }: Props) => {
//   const firstRender = useFirstRender()
//
//   const [selectedItem, setSelectedItem] = useState<ListItem>(
//     chosenItem ? chosenItem : list[0],
//   )
//
//   useEffect(() => {
//     if (firstRender) chosenItem ? onChange(chosenItem) : onChange(list[0])
//   }, [list])
//
//   return (
//     <div className={clsx('', className)}>
//       {label && <span className="block font-medium text-dark-blue mb-1 outline-none">{label}</span>}
//       <Listbox
//         disabled={disabled}
//         as={'div'}
//         value={selectedItem}
//         onChange={(option: ListItem) => {
//           onChange(option)
//           setSelectedItem(option)
//         }}
//         className="relative"
//       >
//         <Listbox.Button
//           className="font-medium flex flex-row items-center justify-between w-full rounded-lg border border-[#D0D5DD] outline-none px-4 py-2.5 text-dark">
//           <p className="flex flex-row">
//             {icon ? (
//               <div className="flex items-center pr-2.5">
//                 <img width="15" height="15" src={icon} alt=""/>
//               </div>
//             ) : (
//               ''
//             )}
//             {!defaultChosen && !selectedItem ? 'Выбрать' : selectedItem?.value}
//           </p>
//           <img className="pl-1.5" src={dropArrowDown} alt=""/>
//         </Listbox.Button>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-200"
//           enterFrom="opacity-0 translate-y-1"
//           enterTo="opacity-100 translate-y-0"
//           leave="transition ease-in duration-150"
//           leaveFrom="opacity-100 translate-y-0"
//           leaveTo="opacity-0 translate-y-1"
//         >
//           <Listbox.Options
//             className={clsx('absolute rounded-3xl shadow-lg z-10', width)}
//           >
//             {list.map((item, index) => (
//               <Listbox.Option
//                 key={item.id}
//                 className={clsx(
//                   'p-2 flex flex-row font-medium bg-white hover:bg-[#F0FCFF] transition-all cursor-pointer',
//                   index === list.length - 1 && 'rounded-b-xl',
//                 )}
//                 value={item}
//               >
//                 {/*index === services.length - 1 ? "rounded-b-xl" : ""*/}
//                 {icon !== undefined ? (
//                   <img className="pr-1.5" src={item.icon} alt=""/>
//                 ) : (
//                   ''
//                 )}
//                 {item.value}
//               </Listbox.Option>
//             ))}
//           </Listbox.Options>
//         </Transition>
//       </Listbox>
//     </div>
//   )
// }
