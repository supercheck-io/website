"use client";

import {
  Activity,
  Database,
  Globe,
  Shield,
  Container,
  Zap,
  GitBranch,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const featureVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.1,
        duration: 0.6,
      },
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-2" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <h2 id="features-heading" className="sr-only">
          SuperCheck Platform Features
        </h2>
        <motion.div
          variants={featureVariants.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Parallel Execution</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Lightning-fast test execution with intelligent parallel processing
              and job orchestration.
            </p>
          </motion.div>
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Globe className="size-4" />
              <h3 className="text-sm font-medium">Multi-Browser Testing</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Playwright-based testing across multiple browsers with
              comprehensive browser support.
            </p>
          </motion.div>
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Activity className="size-4" />
              <h3 className="text-sm font-medium">Real-time Monitoring</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Continuous monitoring with real-time alerts and comprehensive
              dashboard reporting.
            </p>
          </motion.div>
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              <h3 className="text-sm font-medium">Enterprise Security</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Role-based access control with secure session management and
              granular permissions.
            </p>
          </motion.div>
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Database className="size-4" />
              <h3 className="text-sm font-medium">Multi-Test Types</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Support for browser, API, database, and custom tests in a unified
              platform.
            </p>
          </motion.div>
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Container className="size-4" />
              <h3 className="text-sm font-medium">Docker Deployment</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Easy deployment with Docker support and scalable distributed
              architecture.
            </p>
          </motion.div>
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <GitBranch className="size-4" />
              <h3 className="text-sm font-medium">CI/CD Integration</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Seamless integration with CI/CD workflows and comprehensive test
              reporting.
            </p>
          </motion.div>
          <motion.div
            variants={featureVariants.item}
            className="rounded-lg border border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-gray-950/95 p-6 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Building2 className="size-4" />
              <h3 className="text-sm font-medium">Multi-Organization</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Multi-organization and multi-project architecture with unified
              role management.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
