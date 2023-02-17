import {BenhNhan} from './benh-nhan';

export interface BenhAn {
  id?: number;
  ngayNhapVien?: string;
  ngayRaVien?: string;
  lyDoNhapVien?: string;
  phuongPhapDieuTri?: string;
  bacSyDieuTri?: string;
  benhNhan?: BenhNhan;
}
