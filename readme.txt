To run the UI, open "index.html" in preferred web browser. *May not work in all browsers*

Implementation Details:
 - Android back button is functional. Returns user to main player screen.
 - Assume when mouse is hovered over a button/element, it is same as press-and-hold on a mobile device.
 - Bottom track-changing bar acts as both a slider and buttons.
 - Pressing on an item (Song, Artist, Album, Playlist) will replace the current queue with the item.
	- Pressing on a Song in Queue will jump to the Song instead.

NON-Functioning Features: (Features that are either not working or not implemented)
 - The slider for track-changing does not work.
	- Assume, sliding the button will move it left or right within the bounded area. Where sliding to the end will also change the background colour to yellow.
 - The slider for song-seeking does not work.
	- Assume, sliding the button will move it left or right within the bounded area.
 - Swiping gesture not implemented.
	- Assume, swiping (left/right) on the album art will also change the current track.
 - The 'i' (song information) button is not implemented.
	- Assume, pressing the 'i' button will output a screen displaying information about currently playing song.
 - The items in the tabs are hard-coded in.
	- As such, Drag-and-Drop (dragging an item to the bottom half) will not add the current item to the queue.
		- Assume, items can be picked up and dropped into the bottom area. Bottom area will change color when this happens.
	- Assume items can be clicked on to replace the queue with it.
 - Buttons inside the 'PLAYLIST' tab are non-functional.
	- Assume, pressing the 'NEW' button will output a screen prompting user input.
	- Assume, pressing the 'heart' icon will move item to the 'Pinned' area.
 - The 'QUEUE' tab is not representative of current queue. The current content is just an example.
 - Typing into the search box will not return any items.
	- Assume, searching will return items from within the currently selected tab.
 - In depth setttings are not implemented.
	- Assume, the yellow text are individual buttons.

Known Bugs:
 - After selecting a tab, the hover-highlight with selecting tabs stops working.
 - 'NEW' button show be stickied to the top of tab. Such that it will always be present even when scrolling.