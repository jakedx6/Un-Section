function removeSections() {
  // Get the current selection 
  const selection = figma.currentPage.selection; 

  if (selection.length !== 1 || selection[0].type !== 'SECTION') {
    figma.closePlugin("Please select a single section.");
    return;
  }

  const section = selection[0];
  const children = section.children;

  // Duplicate all children
  
  const duplicates = children.map(child => child.clone());
  // duplicates.map(node => node.clone());

  for (let i = 0; i < duplicates.length; i++) {
    const originalNode = children[i];
    const duplicatedNode = duplicates[i];

    // Place duplicated node at the original position
    duplicatedNode.x = originalNode.x;
    duplicatedNode.y = originalNode.y;
}

figma.currentPage.selection = duplicates;

  // Remove the original section
  section.remove();

    figma.notify("Section removed and children objects replaced with copies");}

// Runs this code if the plugin is run in Figma
if (figma.editorType === "figma") {
  removeSections();

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
}
// Runs this code if the plugin is run in FigJam
if (figma.editorType === "figjam") {
  removeSections();

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
}
