<?php if (!defined('APPLICATION')) exit();

/**
 * Thanks @Mark (http://vanillaforums.org/profile/1/Mark) for Stop Auto Draft
 * which has been the blueprint for this plugin
 */

$PluginInfo['LocalDrafts'] = array(
    'Name' => 'Local Drafts',
    'Description' => 'Replaces the standard auto save draft feature. Auto saved drafts are only stored locally.',
    'Version' => '0.1',
    'Author' => 'Robin',
    'AuthorUrl' => 'http://vanillaforums.org/profile/44046/R_J',
    'License' => 'MIT'
);

class StopAutoDraftPlugin extends Gdn_Plugin {
    public function DiscussionController_Render_Before($Sender) {
        $this->_LocalDrafts($Sender);
    }
    public function PostController_Render_Before($Sender) {
        $this->_LocalDrafts($Sender);
    }
    private function _LocalDrafts($Sender) {
        $Sender->RemoveJsFile('autosave.js');
        $Sender->AddJsFile('localdrafts.js', 'plugins/LocalDrafts');
    }
}
