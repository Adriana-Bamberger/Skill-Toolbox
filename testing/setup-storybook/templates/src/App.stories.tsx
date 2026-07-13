import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import App from './App';

const meta = {
  title: 'App/MainWorkspace',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWorkspaceView: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', { level: 1 });
    
    await expect(heading).toBeInTheDocument();
    await expect(heading.textContent).toContain('React + Vite + Tailwind v4 Loaded');
  },
};