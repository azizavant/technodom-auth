interface Props {
    label: string
    value: string
}

export const ProfileInfoOption = ({ label, value }: Props) => {
    return (
        <p className='text-dark-blue font-bold uppercase mb-4'>
            {label}:<span className='font-medium inline-block ml-2'>{value}</span>
        </p>
    )
}
