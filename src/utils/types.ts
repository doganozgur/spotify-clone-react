export type TrackTypes = {
  id: number;
  title: string;
  description: string;
  artist: string;
  image: string;
  type: string;
  src: string;
};

export interface AudioControls {
  play: () => Promise<void> | void;
  pause: () => void;
  mute: () => void;
  unmute: () => void;
  volume: (volume: number) => void;
  seek: (time: number) => void;
}

export type BrowseItemType = {
  id: number;
  title: string;
  image: string;
  bgColor: string;
};

export type CollectionItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
  src: string;
};
