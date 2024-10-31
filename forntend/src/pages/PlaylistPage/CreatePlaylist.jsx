import React, { useState } from 'react'
import { PopUpWInModel } from '../../utility/PopUpWInModel.jsx'
import { Button, Label, TextInput, Dropdown, Checkbox } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const CreatePlaylist = () => {
    const navigator = useNavigate()
    const [playlistName, setPlaylistName] = useState("")
    const [Type, setType] = useState("Type")

    const dropdownOptions = ["a", "b", "c", "d", "e", "f"]
    const suerverReqToCreate = () => {
        console.log("sent to surver :--> complete this function");
        console.log(playlistName, Type);


        navigator("/playlist")
    }
    const returnToplaylist = () => {
        navigator("/playlist")
    }

    console.log("here");
    

    return (
        <>
                <div className="bg-white  w-full rounded flex flex-col gap-4 items-center p-4 justify-center " >
                    <h2 className=' text-center font-bold'>Creating a new playlist</h2>
                    
                    <div className='w-[75%]'>
                        <div className="mb-2 block">
                            <Label htmlFor="PlaylistName" color="success" value="Enter Playlist Name" />
                        </div>
                        <TextInput
                            id="PlaylistName"
                            placeholder="My Playlist"
                            required
                            onChange={(e) => setPlaylistName(e.target.value)}
                        // color="success"
                        // helperText={
                        //     <>
                        //         <span className="font-medium">Alright!</span> Username available!
                        //     </>
                        // }
                        />
                    </div>


                    <div className="dropdown w-[75%] flex justify-between gap-4">
                        <Dropdown size="sm" label={Type} >
                            {dropdownOptions.map((option, index) =>
                                <Dropdown.Item key={index} onClick={() => setType(option)}>{option}</Dropdown.Item>
                            )}
                        </Dropdown>

                        <div className="flex  gap-2">
                            <Checkbox id="isPublic" />
                            <Label htmlFor="isPublic">isPublic</Label>
                        </div>

                    </div>

                    <div className="buttons w-full flex gap-2 justify-center px-5">
                        <Button color="failure" className='w-1/3' onClick={returnToplaylist}>Cancle</Button>
                        <Button color='blue' onClick={suerverReqToCreate} > Create new Playlist</Button>
                    </div>
                </div>

        </>
    )
}

export default CreatePlaylist