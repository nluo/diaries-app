interface DiaryItem {
    id: number,
    title: string,
    body: string,
    date: string,
    author?: string
}

interface DiaryProps {
    diaries: DiaryItem[],
    diaryForm: {
        open: boolean
    }
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