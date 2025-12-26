'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import Image from 'next/image'
import { BrandButton } from '@/components/BrandButton'
import { BrandCard } from '@/components/BrandCard'
import { BrandInput } from '@/components/BrandInput'

const WORK_TYPE_MAP: Record<string, string> = {
  'Курсовая работа': 'coursework',
  'Реферат': 'ref',
  'Сочинение': 'essay',
}

const VOLUME_OPTIONS = [
  '1–2 страницы',
  '3–5 страниц',
  '6–10 страниц',
  '10–15 страниц',
]

export default function Home() {
  const [topic, setTopic] = useState('')
  const [workType, setWorkType] = useState('')
  const [volume, setVolume] = useState('')
  const [errors, setErrors] = useState<{
    topic?: string
    workType?: string
    volume?: string
  }>({})

  const validate = (): boolean => {
    const newErrors: typeof errors = {}

    if (!topic.trim()) {
      newErrors.topic = 'Поле обязательно для заполнения'
    }

    if (!workType) {
      newErrors.workType = 'Выберите тип работы'
    }

    if (!volume) {
      newErrors.volume = 'Выберите объём'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    const params = new URLSearchParams({
      utm_source: 'landing',
      utm_medium: 'web',
      utm_campaign: 'textwork',
      topic: topic.trim(),
      work_type: WORK_TYPE_MAP[workType],
    })

    window.location.href = `https://kampus.ai/?${params.toString()}`
  }

  const isFormValid = topic.trim() && workType && volume

  return (
    <div className="h-screen overflow-hidden bg-brand-light font-brand flex flex-col text-center">
      {/* Header with Logo */}
      <header className="p-4 md:p-6 lg:p-8 flex-shrink-0">
        <div className="w-full flex justify-start">
          <Image 
            src="https://kampus.ai/public/camp/logos/logo.svg" 
            alt="Kampus Logo" 
            width={40}
            height={40}
            className="h-8 md:h-10 w-auto"
          />
        </div>
      </header>

      <main className="flex-1 px-4 pb-6 min-h-0 flex flex-col items-center justify-center">
        <div className="w-full max-w-md md:max-w-2xl flex flex-col items-center space-y-6 md:space-y-8">
          {/* Header Text - Outside of the card */}
          <div className="w-full text-center">
            <h1 className="mb-2 md:mb-4 text-3xl font-bold text-brand-black md:text-5xl lg:text-6xl tracking-tighter leading-[1.1]">
              Сгенерируй работу за пару минут
            </h1>
            <p className="text-base text-brand-grey md:text-xl">
              Введи тему, выбери формат и объём — дальше будет магия
            </p>
          </div>

          {/* Card and Form */}
          <div className="w-full">
            <BrandCard padding="sm">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Topic */}
                <BrandInput
                  id="topic"
                  label="Тема/запрос"
                  as="textarea"
                  value={topic}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setTopic(e.target.value)
                    if (errors.topic) {
                      setErrors({ ...errors, topic: undefined })
                    }
                  }}
                  placeholder="Например: 'Причины и последствия индустриализации в России'"
                  rows={2}
                  error={errors.topic}
                  className="py-2 md:py-3"
                />

                {/* Work Type */}
                <div>
                  <div className="mb-2 block text-xs md:text-sm font-medium text-brand-grey">
                    Тип работы
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                    {Object.keys(WORK_TYPE_MAP).map((type) => (
                      <label
                        key={type}
                        className={`flex cursor-pointer items-center justify-center rounded-brand-md border p-2 md:p-3 transition-all hover:bg-brand-light text-center focus-within:ring-2 focus-within:ring-brand-accent focus-within:ring-offset-2 ${
                          workType === type
                            ? 'border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent'
                            : 'border-brand-border bg-brand-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="workType"
                          value={type}
                          checked={workType === type}
                          onChange={(e) => {
                            setWorkType(e.target.value)
                            if (errors.workType) {
                              setErrors({ ...errors, workType: undefined })
                            }
                          }}
                          className="sr-only focus:ring-2 focus:ring-brand-accent"
                        />
                        <span className={`text-xs md:text-sm font-semibold ${
                          workType === type ? 'text-brand-accent' : 'text-brand-black'
                        }`}>
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Volume and Submit Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                  <div className="w-full">
                    <label
                      htmlFor="volume"
                      className="mb-2 block text-xs md:text-sm font-medium text-brand-grey text-left"
                    >
                      Объём
                    </label>
                    <select
                      id="volume"
                      value={volume}
                      onChange={(e) => {
                        setVolume(e.target.value)
                        if (errors.volume) {
                          setErrors({ ...errors, volume: undefined })
                        }
                      }}
                      className={`w-full rounded-brand-md border px-4 py-2 md:py-3 text-sm transition-all focus:outline-none focus:ring-2 bg-brand-light focus:bg-brand-white appearance-none ${
                        errors.volume
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-brand-border focus:border-brand-accent focus:ring-brand-accent/20'
                      }`}
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Выберите объём</option>
                      {VOLUME_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full">
                    <BrandButton
                      type="submit"
                      disabled={!isFormValid}
                      label="Продолжить"
                      className="w-full py-2 md:py-3 text-base shadow-lg shadow-brand-accent/20"
                      size="lg"
                    />
                  </div>
                </div>
              </form>
            </BrandCard>
          </div>
        </div>
      </main>
    </div>
  )
}
