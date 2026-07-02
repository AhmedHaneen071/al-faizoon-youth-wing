type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface Notification {
  id: string
  message: string
  type: NotificationType
  timestamp: number
}

type NotificationListener = (notification: Notification) => void

export class NotificationService {
  private static _instance: NotificationService
  private listeners: Set<NotificationListener> = new Set()
  private history: Notification[] = []

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService._instance) {
      NotificationService._instance = new NotificationService()
    }
    return NotificationService._instance
  }

  subscribe(listener: NotificationListener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  notify(message: string, type: NotificationType = 'info'): void {
    const notification: Notification = {
      id: crypto.randomUUID(),
      message,
      type,
      timestamp: Date.now(),
    }
    this.history.push(notification)
    this.listeners.forEach(listener => listener(notification))
  }

  success(message: string): void {
    this.notify(message, 'success')
  }

  error(message: string): void {
    this.notify(message, 'error')
  }

  info(message: string): void {
    this.notify(message, 'info')
  }

  getHistory(): Notification[] {
    return [...this.history]
  }

  clearHistory(): void {
    this.history = []
  }
}
