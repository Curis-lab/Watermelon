/**
 * this template is really important for security of the app
 */

/**
 * 1. Guest / Visitor

Purpose: Someone who is not logged in. Their goal is to explore and understand the platform's value.

Permissions:

Browse public events and group pages.

View public mentor profiles.

Search for topics, groups, and mentors.

Sign up to become a Member.

2. Member (The Core User)

Purpose: This is the default role for every signed-up user. They are the "participants" – the ones attending events and booking mentorship sessions.

Permissions:

All Guest permissions.

Create and edit their own profile.

For Events: RSVP to events, join waiting lists, post in event discussions.

For Mentorship: Browse the full mentor calendar, book available mentorship sessions.

Join and participate in Groups.

Leave reviews/ratings for events and mentorship sessions.

(Optional) Create their own Groups (see Pro/Organizer role).

3. Mentor

Purpose: A specialized role for users who offer their time for one-on-one or small-group mentorship. A user can be both a Member and a Mentor.

Permissions:

All Member permissions.

A "Mentor Profile" with specific fields: bio, expertise/skills, availability calendar, session types (e.g., 30-min career chat, 60-min portfolio review), and pricing (if you have paid sessions).

Manage their own booking calendar (set availability, block times).

View and confirm/decline mentorship requests.

Integrate with external video conferencing (Zoom, Google Meet).

4. Organizer / Group Host

Purpose: A user who creates and manages a community Group (e.g., "UX Designers of NYC," "Aspiring Product Managers").

Permissions:

All Member permissions.

Create and manage a Group (name, description, rules, image).

Create and publish Events within their group.

Manage event details (time, date, description, capacity).

Message all group members.

Approve or deny requests to join their group.

(Optional) Appoint Co-Organizers or Event Hosts.
 */

export const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  mentor: [],
  attendee: [],
  organizer: [],
  normal_user:[]
} as const;

