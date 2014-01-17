/*
// Plant Animation 
// Walker Boys (www.walkerboystudio.com)
// November 28, 2011
// Description: Animates a plant on trigger event
// Instruction: Assign script to a plant (or object that has 'wiggle' as an animation label)
*/
// we can check trigger event on this object rather than on player
function Start () {									// initialize things
	animation.Stop ();								// be sure it ani starts off stopped
}
function OnTriggerEnter ( col : Collider ) {		// if player runs through trigger area
	animation.Play ( "wiggle" );					// play the animation file
}
