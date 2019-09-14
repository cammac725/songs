import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Jeremy', duration: '4:27' },
        { title: 'Houses of the Holy', duration: '3:40' },
        { title: 'All Star', duration: '3:15' },
        { title: 'White Room', duration: '6:22' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})