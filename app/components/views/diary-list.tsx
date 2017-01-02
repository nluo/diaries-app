import { Link } from 'react-router'
import * as React from 'react'

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card'

import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

interface DiaryItem {
    id: number,
    title: string,
    body: string,
    date: string,
    author?: string
}

interface DiaryProps {
    diaries: DiaryItem[]
}

const ActionButton = (
    <FloatingActionButton secondary={true} >
        <ContentAdd />
    </FloatingActionButton>
)

const cardStyle = {
    marginBottom: '30px'
}

export function DiaryList (props: DiaryProps) {
    return (
        <div className="diaryList">
            {props.diaries.map((diary) => {
                return (
                    <Card key={ diary.id } style={ cardStyle } >
                        <CardHeader
                            title={ diary.title }
                            subtitle={ diary.date }
                            />
                        <CardText>
                            { diary.body }
                        </CardText>
                    </Card>
                )
            })}
        </div>
    )
}