import Clipping from "../demos/Clipping";
import HSM from "../demos/HSM";

export interface Demo {
    element: React.ReactNode;
    title: string;
    path: string;
    keywords: string[];
  }

const clipping: Demo = {
    element: <Clipping />,
    title: 'Clipping',
    path: 'clipping',
    keywords: ['clip', 'clipping', 'mask'],
};

const hsm: Demo = {
    element: <HSM />,
    title: 'HSM',
    path: 'hsm',
    keywords: ['hsm', 'digital signature', 'signature'],
};


export const demos = [
    clipping,
    hsm
]