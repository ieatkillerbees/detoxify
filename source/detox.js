walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/GCrRdF
	// who stole it from here: 
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\btoxin\b/g, "evil spirit");
	v = v.replace(/\btoxins\b/g, "evil spirits");
	v = v.replace(/\bToxin\b/g, "Evil Spirit");
	v = v.replace(/\bToxins\b/g, "Evil Spirits");
	v = v.replace(/\btoxic\b/g, "demonic");
	v = v.replace(/\bToxic\b/g, "Demonic");
	v = v.replace(/\bdetox\b/g, "exorcise");
	v = v.replace(/\bDetox\b/g, "Exorcise");
	v = v.replace(/\bdetoxing\b/g, "exorcising");
	v = v.replace(/\bDetoxing\b/g, "Exorcising");

	textNode.nodeValue = v;
}
