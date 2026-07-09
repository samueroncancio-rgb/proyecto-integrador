import { renderAdminDashboard } from "../views/admin/admin-dashboard";
import { renderCourseManager } from "../views/admin/course-manager";
import { renderProgressMonitor } from "../views/admin/progress-monitor";
import { renderUserManager } from "../views/admin/user-manager";
import { renderlogin } from "../views/auth/login";
import { renderRegister } from "../views/auth/register";
import { renderHome } from "../views/home/home";
import { renderNotFound } from "../views/not-found";
import { renderCourseDetail } from "../views/tasks/course-detail";
import { renderCourselist } from "../views/tasks/course-list";
import { renderCoursePlayer } from "../views/tasks/course-player";
import { renderDashboard } from "../views/users/dashboard";
import { renderProfile } from "../views/users/profile";

export const routes = {

    "/": {
        render: renderHome
    },

    "/login": {
        render: renderlogin,
        onlyGuests: true
    },

    "/register": {
        render: renderRegister,
        onlyGuests: true
    },

    "/dashboard": {
        render: renderDashboard,
        requiresAuth: true
    },

    "/courses": {
        render: renderCourselist,
        requiresAuth: true
    },

    "/course": {
        render: renderCourseDetail,
        requiresAuth: true
    },

    "/player": {
        render: renderCoursePlayer,
        requiresAuth: true
    },

    "/profile": {
        render: renderProfile,
        requiresAuth: true
    },

    "/admin": {
        render: renderAdminDashboard,
        requiresAuth: true,
        allowRoles: ["ADMIN"]
    },

    "/admin/users": {
        render: renderUserManager,
        requiresAuth: true,
        allowRoles: ["ADMIN"]
    },

    "/admin/courses": {
        render: renderCourseManager,
        requiresAuth: true,
        allowRoles: ["ADMIN"]
    },

    "/admin/progress": {
        render: renderProgressMonitor,
        requiresAuth: true,
        allowRoles: ["ADMIN"]
    }

};

export const notFoundView = renderNotFound;