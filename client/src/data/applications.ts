import type { Application, Feature } from "@shared/schema";
import kepoIcon from "@assets/generated_images/KEPO_app_icon_34d932fe.png";
import radioIcon from "@assets/generated_images/Radio_dashboard_icon_7a9a440e.png";
import presensiIcon from "@assets/generated_images/Attendance_app_icon_b1f89278.png";
import approvalIcon from "@assets/generated_images/Approval_system_icon_98027634.png";
import poketIcon from "@assets/generated_images/Poket_app_icon_5fc473a0.png";

export const applications: Application[] = [
  {
    id: "kepo",
    name: "KEPO",
    description: "Platform digital terintegrasi sebagai repository dokumen acceptance dan pengelolaan penagihan end-to-end. Dilengkapi dengan tanda tangan digital dan e-Materai, aplikasi ini mempercepat proses administrasi, meningkatkan akurasi, serta mendukung tata kelola dokumen yang aman dan terdigitalisasi.",
    url: "https://kepo.telkominfra.com/login",
    icon: kepoIcon,
    category: "Document Management",
    features: [
      "Digital signature & e-Materai integration",
      "End-to-end billing management",
      "Secure document repository",
      "Automated acceptance workflow"
    ]
  },
  {
    id: "dashboard-radio",
    name: "Dashboard Dismantle Radio IP",
    description: "Comprehensive dashboard for managing and monitoring radio IP infrastructure. Track performance metrics, analyze network data, and optimize your radio communication systems with real-time insights.",
    url: "https://amara.telkominfra.com",
    icon: radioIcon,
    category: "Infrastructure",
    features: [
      "Real-time monitoring",
      "Performance analytics",
      "Network optimization",
      "Infrastructure management"
    ]
  },
  {
    id: "presensi",
    name: "Presensi",
    description: "Modern attendance management system with GPS tracking, real-time reporting, and seamless integration. Simplify workforce management and ensure accurate time tracking for your organization.",
    url: "https://presensi.telkominfra.com",
    icon: presensiIcon,
    category: "HR Management",
    features: [
      "GPS-based check-in/out",
      "Real-time attendance reports",
      "Leave management",
      "Mobile-friendly interface"
    ]
  },
  {
    id: "approval",
    name: "Approval",
    description: "Streamline your approval workflows with our intelligent system. Manage requests, track status, and ensure compliance with automated routing and notifications for faster decision-making.",
    url: "https://approval.telkominfra.com",
    icon: approvalIcon,
    category: "Workflow",
    features: [
      "Multi-level approval chains",
      "Automated notifications",
      "Status tracking",
      "Compliance management"
    ]
  },
  {
    id: "poket",
    name: "Poket",
    description: "Comprehensive expense and reimbursement management platform. Track expenses, submit claims, and manage budgets efficiently with real-time approval workflows and detailed reporting.",
    url: "https://poket.telkominfra.com",
    icon: poketIcon,
    category: "Finance",
    features: [
      "Expense tracking",
      "Digital receipts",
      "Budget management",
      "Quick reimbursement"
    ]
  }
];

export const features: Feature[] = [
  {
    icon: "dashboard",
    title: "Centralized Dashboard",
    description: "Access all your applications from one unified dashboard with real-time updates and personalized widgets."
  },
  {
    icon: "personalize",
    title: "Personalized Experience",
    description: "Customize your workspace with tailored layouts, quick access shortcuts, and intelligent recommendations."
  },
  {
    icon: "secure",
    title: "Fast & Secure",
    description: "Enterprise-grade security with SSO integration, encrypted data transmission, and lightning-fast performance."
  },
  {
    icon: "sync",
    title: "Seamless Sync",
    description: "Real-time synchronization across all devices with automatic updates and offline capability."
  }
];
