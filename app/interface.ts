interface DiaryItem {
    id?: number,
    title: string,
    body: string,
    date: Date,
    author?: string
}

interface DiaryForm extends DiaryItem {
    errors: Object
}

interface DiaryListProps {
    diaries: DiaryItem[],
    showForm: any
}

interface User {
    id: number,
    email: string
    name: string
}

interface FriendsProps {
    friends: User[],
    deleteFriend: Function
}

interface DiaryFormProps {
    open: boolean,
    onSubmit?: any,
    onChange?: any,
    error?: DiaryFormError,
    diary?: DiaryItem,
    onClose?: any,
    handleDateChange?: any
}

interface DiaryFormItem {
    name: string,
    value: string
}

interface DiaryFormError {
    title?: string,
    body?: string
}