import { ICourse } from '../../../api/auth/models';

export interface ICourseModalProps {
  isOpen: boolean;
  course: ICourse | null;
  onClose: () => void;
}
