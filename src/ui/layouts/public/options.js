export const NAVIGATION_ITEMS = (() => {
  const topNavigation = [
    {
      name: 'home',
      title: 'Home',
      path: '/',
    },
    {
      name: 'palindrome',
      title: 'Palindrome',
      path: '/palindrome',
      isPrivate: true,
    },
    {
      name: 'cash-change',
      title: 'Cash Change',
      path: '/cash-change',
      isPrivate: true,
    }
  ];

  return topNavigation;
})();
