import React from 'react';
import {Card} from './elements/Card';
import {Button} from './elements/Button';

export function SavePostCard({createNewGallery,updatePostData}){
    return (
        <Card title="Save to Post">
            <p className="card-text">
                    You can add shotrcodes to your post by pressing "Save" button.
                    Also available additional settings that will help customize your gallery. 
                    To delete gallery click the "Delete" button.
                    You can copy the shortcode and paste it anywhere in your post.</p>
            <Button className="btn btn-primary" onClick={updatePostData}>Save</Button>
            <Button className="btn btn-primary ml-2" onClick={createNewGallery}>New Gallery</Button>

        </Card>
    )
} 