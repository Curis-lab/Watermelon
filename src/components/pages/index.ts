import { lazy } from "react";

export const NotFoundPage = lazy(() => import("./NotFoundPage"));
export const UserDashboard = lazy(() => import("./UserDashboardPage"));
export const Home = lazy(() => import("./HomePage"));
export const ChatAndNetwork = lazy(() => import("./ChatAndNetworkPage"));

export const AdminDashboard = lazy(() => import("./AdminDashboard"));
export const EventDiscoveryPage = lazy(()=>import ('./EventDiscoveryPage'));
export const Profile = lazy(()=>import('./ProfilePage'))
export const CreateEvent = lazy(()=>import('./CreateEvent'))

export const Onboarding = lazy(()=>import('./Onboarding'));
export const ProfileSetup = lazy(()=>import('./ProfileSetup'));
export const Events = lazy(()=>import('./Events'));
export const Mentors = lazy(()=>import('./Mentors'));
export const MentorProfile = lazy(()=>import('./MentorProfile'));