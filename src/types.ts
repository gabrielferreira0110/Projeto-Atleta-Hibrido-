export interface Exercise {
  name: string;
  details?: string;
}

export interface WorkoutVideo {
  label?: string;
  url: string;
}

export interface WorkoutBlock {
  id: number;
  type: string;
  title: string;
  description: string;
  interval: string;
  videos: WorkoutVideo[];
  exercises?: Exercise[];
}

export interface Workout {
  id: string;
  title: string;
  subtitle: string;
  blocks: WorkoutBlock[];
}
