import Vue from 'vue'
import Router from 'vue-router'
import MyIssues from '@/components/MyIssues'
import Workspaces from '@/components/Workspaces'
import Profile from '@/components/Profile'
import Issue from '@/components/Issue'
import WorkspaceDetails from '@/components/WorkspaceDetails'
import WorkspaceIssues from '@/components/WorkspaceIssues'
import WorkspaceMembers from '@/components/WorkspaceMembers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/myIssues',
      name: 'MyIssues',
      component: MyIssues
    },
    {
      path: '/workspaces',
      name: 'Workspaces',
      component: Workspaces
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/issue',
      name: 'Issue',
      component: Issue
    },
    {
      path: '/workspace/:id',
      name: 'WorkspaceDetails',
      component: WorkspaceDetails
    },
    {
      path: '/workspace/:id/issues',
      name: 'WorkspaceIssues',
      component: WorkspaceIssues
    },
    {
      path: '/workspace/:id/members',
      name: 'WorkspaceMembers',
      component: WorkspaceMembers
    },
    {
      path: '/',
      redirect: '/myIssues',
    },
    {
      path: '*',
      redirect: '/myIssues',
    },
  ]
})
