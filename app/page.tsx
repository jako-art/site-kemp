'use client'

import { useState, type FormEvent } from 'react'
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
    <div className="min-h-screen bg-brand-light px-4 py-8 md:py-16 font-brand">
      <div className="mx-auto max-w-md">
        {/* Logo */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow rounded-brand-sm shadow-brand-float">
            <span className="text-xl font-bold text-brand-black">Кэмп Ракета</span>
          </div>
        </div>

        {/* Card */}
        <BrandCard>
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-2xl font-bold text-brand-black md:text-3xl tracking-tight">
              Сгенерируй работу за пару минут
            </h1>
            <p className="text-sm text-brand-grey md:text-base">
              Введи тему, выбери формат и объём — дальше продолжишь в Кэмпе.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Topic */}
            <BrandInput
              id="topic"
              label="Тема/запрос"
              as="textarea"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value)
                if (errors.topic) {
                  setErrors({ ...errors, topic: undefined })
                }
              }}
              placeholder="Например: 'Причины и последствия индустриализации в России'"
              rows={4}
              error={errors.topic}
            />

            {/* Work Type */}
            <div>
              <div className="mb-3 block text-sm font-medium text-brand-grey">
                Тип работы
              </div>
              <div className="grid grid-cols-1 gap-3">
                {Object.keys(WORK_TYPE_MAP).map((type) => (
                  <label
                    key={type}
                    className={`flex cursor-pointer items-center rounded-brand-sm border px-4 py-4 transition-all hover:bg-brand-light ${
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
                      className="h-4 w-4 text-brand-accent border-brand-border focus:ring-brand-accent"
                    />
                    <span className={`ml-3 text-sm font-medium ${
                      workType === type ? 'text-brand-accent' : 'text-brand-black'
                    }`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
              {errors.workType && (
                <p className="mt-1 text-xs text-red-600">{errors.workType}</p>
              )}
            </div>

            {/* Volume */}
            <div>
              <label
                htmlFor="volume"
                className="mb-2 block text-sm font-medium text-brand-grey"
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
                className={`w-full rounded-brand-sm border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 bg-brand-light focus:bg-brand-white ${
                  errors.volume
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                    : 'border-brand-border focus:border-brand-accent focus:ring-brand-accent/20'
                }`}
              >
                <option value="">Выберите объём</option>
                {VOLUME_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.volume && (
                <p className="mt-1 text-xs text-red-600">{errors.volume}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <BrandButton
                type="submit"
                disabled={!isFormValid}
                label="Продолжить"
                className="w-full"
                size="lg"
              />
              <p className="mt-4 text-center text-xs text-brand-grey">
                Нажимая 'Продолжить', вы перейдёте на kampus.ai
              </p>
            </div>
          </form>
        </BrandCard>
      </div>
    </div>
  )
}

