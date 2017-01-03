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

interface DiaryProps {
    diaries: DiaryItem[],
    diaryForm: DiaryForm,
    diaryFormOpen: boolean
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
    onChange?: Function,
    errors?: any,
    diary?: DiaryItem
}

interface DiaryFormItem {
    name: string,
    value: string
}