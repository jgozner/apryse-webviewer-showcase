import Clipping from "../demos/Clipping";
import CustomAnnotation from "../demos/CustomAnnotation";
import HSM from "../demos/HSM";

export interface Demo {
    element: React.ReactNode;
    title: string;
    path: string;
    keywords: string[];
  }

const clipping: Demo = {
    element: <Clipping />,
    title: 'Annotation Clipping',
    path: '/annotation-clipping',
    keywords: ['clip', 'clipping', 'mask', 'annotation', ],
};

const hsm: Demo = {
    element: <HSM />,
    title: 'HSM Signing',
    path: '/hsm-signing',
    keywords: ['hsm', 'digital signature', 'signature', 'signing'],
};

const customAnnotation: Demo = {
    element: <CustomAnnotation />,
    title: 'Custom Annotation',
    path: '/custom-annotation',
    keywords: ['custom annotation', 'annotation', 'custom'],
};


export const demos = [
    clipping,
    hsm,
    customAnnotation
]