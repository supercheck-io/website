'use client'

import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  variants?: {
    container?: Variants
    item?: Variants
  }
}

export function AnimatedGroup({ 
  children, 
  className,
  variants = {
    container: {
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }
  }
}: AnimatedGroupProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      className={className}
      variants={variants.container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div variants={variants.item}>
        {children}
      </motion.div>
    </motion.div>
  )
}