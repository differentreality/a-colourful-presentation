import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent';
import poster from '../../../../Photos/GitZeroToHero/git-zero-hero-poster.png'
import { Git } from '../../../../svg/topics/topicsSvg';

function importAll(r) {
    return r.keys().map(r);
}

const images = [];
// importAll(require.context('../../../../Photos/git101ateith/', false, /\.(png|jpe?g|svg|JPE?G)$/));

const codesnippets_undo=<div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Undo changes of file</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Command'>git checkout </span>
    <span className='codeSnippet__code-Input'>filename </span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Undo staged file</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Command'>git add </span>
    <span className='codeSnippet__code-Input'>filename </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>git reset </span>
    <span className='codeSnippet__code-Input'>filename </span>
</div>

<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Undo local commit</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Command'>git commit </span>
    <span className='codeSnippet__code-Input'>-m 'WIP' </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>git reset </span>
    <span className='codeSnippet__code-Input'>commit_hash_to_keep</span>
</div>

<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Undo local commit</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Command'>git commit </span>
    <span className='codeSnippet__code-Input'>-m 'WIP' </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>git push </span>
    <span className='codeSnippet__code-Input'>upstream branch_name </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>git revert </span>
    <span className='codeSnippet__code-Input'>commit_hash</span>
</div>

</div>


const codesnippets_messed_up=<div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// The following commands are dangerous! Use at your own <b>RISK!</b></span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Fix messed up master brach</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Command'>git reset --hard </span>
    <span className='codeSnippet__code-Input'>upstream/master</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Remove unwanted commits</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Command'>git reset </span>
    <span className='codeSnippet__code-Input'>commit_hash_to_keep</span>
</div>

<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Remove untracked files</span>
</div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Command'>git clean -f </span>
</div>

</div>

const downloadLinks=[
]

const cheatsheet_messed_up = [
  {
    title: 'Messed up branch',
    commands: [{
      command: 'git reset --hard remote/branch_name',
      use: 'Syncs local branch with remote branch'
    }]
  },
  {
    title: 'Unwanted commits',
    commands: [{
      command: 'git reset commit_hash_to_keep',
      use: 'removes all commits, and their changes, after the commit mentioned'
    }]
  },
  {
    title: 'Remove untracked files',
    commands: [{
      command: 'git clean -f',
      use: '-f is for force'
    }]
  }
]
const cheatsheet=[
  {
    title: 'Intialize your repo',
    commands: [{
      command: 'git clone link',
      use: 'Get an online repo locally'
    },
    {
      command: 'git init',
      use: 'Create a local repo - make the current folder a git repository'
    }]
  },
  {
    title:'Reality check',
    commands: [{
      command:'git status',
      use:'Shows the current status of your branch'
    },
    {
      command: 'git log',
      use: 'Show the commits of the current branch'
    }]
  },

  {
    title: 'Get online changes',
    commands: [{
      command: 'git pull upstream/master',
      use: 'Bring to the current local branch the changes from the online master branch'
    }]
  },
  {
    title: 'Differences?',
    commands: [{
      command: 'git diff',
      use: 'Shows the changes you have made (modified state)'
    }]
  },

  {
    title: 'Change branch',
    commands: [{
      command: 'git checkcout branch_name',
      use: 'Go to another branch'
    }]
  },
  {
    title: 'Create new branch',
    commands: [{
      command: 'git checkout -b branch_name',
      use: 'Create a new branch and start working in it'
    }]
  },
  {
    title: 'Keep some changes',
    commands: [{
      command: 'git add filename',
      use: 'Stage files'
    }]
  },
  {
    title: 'Log your changes',
    commands: [{
      command: "git commit -m 'Commit message'",
      use: 'Create a commit message with the staged files'
    }]
  },

  {
    title: 'Upload changes onine',
    commands: [{
      command: 'git push own branch_name',
      use: 'Send the changes of the local branch to your online fork'
    }]
  },

]

const stages = [
    // 'eat guacamole and cheese','drink water','sleep late sleep late'
]

const material_links = { title:'Material',
                         links:[{
                             url: 'https://drive.google.com/drive/folders/1alyIVTnTImfD13X_WeAQlKvOUe8bWMJj',
                             text: 'Workshop files'
                         },
                         {
                           url: 'https://git-scm.com/docs/git',
                           text: 'Official Documentation'
                         }
                       ]
}

const imageCaptions=['lorem','lorem','lorem','lorem','lorem']
const eventData =
    {
        title:'Git: from Zero to Hero!',
        date: '08 & 15 Dec. 2019',
        details: <div><p>Hands on the #1 tool of every development team. </p>
        <p> <b>Git 101 on 8/12 14:30 - 18:00</b> <br />
        An introduction to git basic commands and workflows, with an after-flavor of GitHub<br/>
        - Basic techniques for version control<br/>
        - Collaboration made easier with git<br/>
        - Publish your code on GitHub<br/>
        - Contribute to open sourc projects
        </p>

        <p>
          <b>Git 102 on 15/12 15:00 - 18:00 </b><br/>
          Practicing what we learning and diving into more advanced scenarios.<br/>
          - Workinig with multiple branches, and how to merge them<br/>
          - Conflict resolution<br/>
          - Undo your changes from any state
        </p>
        </div>,
        group:'workshop',
        topic:'git',
        poster:poster,
        slides:'https://drive.google.com/drive/folders/1alyIVTnTImfD13X_WeAQlKvOUe8bWMJj',
        socialEvent:'https://www.facebook.com/events/1405170809644106',
        links:[material_links],
        svg:Git,
        cheatsheet,
        codeSnippets:[[codesnippets_undo],codesnippets_messed_up],
        images,
        imageCaptions,
        downloadLinks,
        stages
    }

const GitZeroToHero = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default GitZeroToHero;
