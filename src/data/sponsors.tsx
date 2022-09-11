export type User = {
  title: string;
  github: string | null;
  image_url: string | null;
  discord: string | null;
};

export const Users: User[] = [
  {
    title: 'Grzegorz',
    github: 'https://github.com/gregd',
    image_url: 'https://github.com/gregd.png',
    discord: 'gregd#4874',
  },
];
