# Kanban Board

Developed an interactive Kanban board application using React JS that interacts with the provided API as a part of QuickSell Frontend Assignment.

Web Application is developed using pure ReactJs with no frameworks used. Additionally only pure css is used to style the app no css framework is used as well.

The Application Fetch Data from QuickSell server via provided API. The Fetched Data consists of Tickets and Users.

The Application is capable of Grouping Tickets based on any of the three distinct ways provided below:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Additionally, The tickets within each group are order based on any of the 2 distinct ways provided below:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (These values are received from the api)**

4 - Urgent

3 - High

2 - Medium

1 - Low

0 - No priority

Additionally, the application saves the user's view state even after page is reloaded.

**Extra Features Added**:

- A Toast component which pops up when the applicaion is unable to fetch data from API.
- User Badge for Each user.
- Hover Effect on User Badge to show User Info.
- Hover Effect on Priority Tag to show the Priority of ticket.

**Upcoming Feature**:

- Dark Mode
